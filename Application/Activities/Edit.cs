
using System.Runtime.InteropServices;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public IMapper _mapper { get; set; }
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activitiy = await _context.Activities.FindAsync(request.Activity.Id);

                _mapper.Map(request.Activity, activitiy);

                // activitiy.Title = request.Activity.Title ?? activitiy.Title; // Mapper'dan önceki yöntem.

                await _context.SaveChangesAsync();

            }

        }

    }
}